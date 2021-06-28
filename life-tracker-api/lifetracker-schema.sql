CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  password    TEXT NOT NULL,
  name        TEXT NOT NULL,
    is_admin    BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE createexercise (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT NOT NULL DEFAULT 'misc',
  intensity   TEXT NOT NULL,
  length      INTEGER NOT NULL, 
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE exercises (
  id          SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE SET NULL,  
    exercise_id INTEGER NOT NULL REFERENCES createexercise(id) ON DELETE SET NULL
);

-- CREATE TABLE excercises_details (
--   order_id    INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
--   product_id  INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
--   quantity    INTEGER NOT NULL DEFAULT 1,
--   discount    INTEGER,
--   PRIMARY KEY (order_id, product_id)
-- );