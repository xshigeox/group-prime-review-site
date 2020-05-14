CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  rating INTEGER NOT NULL CHECK (rating > 0 AND rating < 6),
  review TEXT,
  character_id INTEGER NOT NULL references heroes(id),
  time_stamp TIMESTAMP default CURRENT_TIMESTAMP
);