
DOCKER_COMPOSE=-f docker/docker-compose.yml
COMPOSER_ARGS=install

.PHONY: build_images
build_images: build_node_image

.PHONY: build_node_image
build_node_image:
	docker build -f docker/node/Dockerfile .

.PHONY: npm_install
npm_install:
	docker-compose $(DOCKER_COMPOSE) run --rm vue-service sh -c "npm install"

.PHONY: startup
startup: build_images npm_install
	docker-compose $(DOCKER_COMPOSE) up

.PHONY: stop
stop:
	docker-compose $(DOCKER_COMPOSE) down -v
