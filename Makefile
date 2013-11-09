test: test-unit test-routes

test-unit:
	./src/node_modules/.bin/mocha --recursive ./src/test

test-routes:
	./src/node_modules/.bin/mocha --recursive ./src/api/test/routes
