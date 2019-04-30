
lint:
	@standard --verbose | snazzy

test:
	@ospec **/*.test.js --require ${PROJECT_HOME}/test-init.js

watch:
	@reflex -d none -c reflex.conf
