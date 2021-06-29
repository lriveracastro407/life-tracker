CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  password    TEXT NOT NULL,
  name        TEXT NOT NULL,
    is_admin    BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE exercise (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT NOT NULL DEFAULT 'misc',
  intensity   TEXT NOT NULL,
  duration      INTEGER NOT NULL, 
  created_at  TIMESTAMP DEFAULT NOW(),
  user_id  INTEGER REFERENCES users(id) ON DELETE CASCADE 
);

CREATE TABLE activity (
  id  SERIAL PRIMARY KEY,
  activity_type VARCHAR(50) NOT NULL,
  exercise_id INTEGER REFERENCES exercise(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- CREATE TABLE excercises_details (
--   order_id    INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
--   product_id  INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
--   quantity    INTEGER NOT NULL DEFAULT 1,
--   discount    INTEGER,
--   PRIMARY KEY (order_id, product_id)
-- );