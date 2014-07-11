'use strict';

angular.module('webApp')
    .service('DateHelper', ["$filter", function($filter){
        return {
            format: function(dateStr, format)
            {
                var date = new Date(dateStr.toString());
                var utcDate = $filter('utc')(date);
                return $filter('date')(utcDate, 'yyyy-MM-dd');
            },
            getAge: function(dateStr)
            {
                var birthday = +new Date(dateStr.toString());
                return ~~((Date.now() - birthday) / (31557600000));
            }
        }
    }])
    //Helper methods used to help work with ngTable
    .service('TableHelper', ["$filter", function($filter){
        return {
            getPage: function(data, params)
            {
                var page = params.page(),
                    perPage = params.count();
                return data.slice((page - 1) * perPage, page * perPage)
            },
            sort: function(data, params)
            {
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;

                return orderedData;
            },
            search: function(data, params)
            {
                var filteredData = params.filter() ?
                    $filter('filter')(data, params.filter()) :
                    data;

                return filteredData;
            },
            getAjaxParams: function(tableParams)
            {
                var sortKeys = Object.keys(tableParams.sorting || {}),
                    params = {
                        take: tableParams.per_page,
                        offset: tableParams.per_page * (tableParams.page - 1)
                    }

                _.forEach(sortKeys, function(key){
                    if(tableParams.sorting[key])
                        params['sort.'+key] = tableParams.sorting[key];
                });

                return params;
            }
        }
    }])
    //Helper used to work with address objects
    .service('AddressHelper', ["$rootScope", function Helper($rootScope) {

        return {
            isLocatableAddress: function(address)
            {
                return address &&
                    (address.zip ||
                        (address.city && address.state) ||
                        (address.city && address.line1))
            },
            formatAddress: function(address)
            {
                if(!address) return '';

                //ignores fields sent as params 1..N
                var keys = ['line1', 'line2', 'city', 'state', 'zip']
                    , values = _.compact(keys.map(function(k) { return address[k] }));

                return values.join(', ');
            }
        }
    }])
    //Helper used to help validate a form
    .factory("FormValidationHelper", function(){
        function FormValidationHelper(scope, formName)
        {

            this.scope = scope;
            this.name = formName;

            this.getForm = function()
            {
                return this.scope && this.scope[this.name] || {};
            }

            this.getField = function(fieldName)
            {
                var form = this.getForm();
                return form[this.name];
            }
        }

        FormValidationHelper.prototype.isFieldInvalid = function(name)
        {
            var field = this.getField(name);

            if(field)
            {
                return field.$dirty && field.$invalid;
            }
            else
                return false;
        }

        FormValidationHelper.prototype.isFieldValid = function(name)
        {
            var field = this.getField(name);
            if(field)
            {
                return field.$valid;
            }
            else
                return false;
        }

        FormValidationHelper.prototype.isFormValid = function()
        {
            var form = this.getForm();
            return form && form.$valid;
        }

        return FormValidationHelper;

    });
