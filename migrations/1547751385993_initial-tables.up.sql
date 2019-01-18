CREATE TABLE topping (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE pizza (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price MONEY NOT NULL
);

CREATE TABLE pizza_topping (
    id BIGSERIAL PRIMARY KEY,
    pizza_id BIGINT REFERENCES pizza(id),
    topping_id BIGINT REFERENCES topping(id)
);
CREATE INDEX ON pizza_topping(pizza_id);
CREATE INDEX ON pizza_topping(topping_id);

CREATE TABLE order_status (
    status TEXT PRIMARY KEY
);

INSERT INTO order_status (status) VALUES ('NEW');
INSERT INTO order_status (status) VALUES ('RECEIVED');
INSERT INTO order_status (status) VALUES ('IN_PROGRESS');
INSERT INTO order_status (status) VALUES ('READY');

CREATE TABLE "order" (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    user_id TEXT NOT NULL,
    pizza JSONB NOT NULL,
    status TEXT NOT NULL REFERENCES order_status(status)
);
CREATE INDEX ON "order"(status);
