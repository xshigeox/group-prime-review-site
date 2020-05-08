CREATE TABLE marvel_characters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  alias VARCHAR(255) DEFAULT 'Unknown',
  bio TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  durability INTEGER NOT NULL CHECK (durability > 0 AND durability < 8),
  energy INTEGER NOT NULL CHECK (energy > 0 AND energy <8),
  fighting_skills INTEGER NOT NULL CHECK (fighting_skills > 0 AND fighting_skills <8),
  intelligence INTEGER NOT NULL CHECK (intelligence > 0 AND intelligence < 8),
  speed INTEGER NOT NULL CHECK (speed > 0 AND speed < 8),
  strength INTEGER NOT NULL CHECK (strength > 0 AND strength < 8),
  height FLOAT,
  weight INTEGER,
  gender VARCHAR(255),
  eye_color VARCHAR(255),
  hair_color VARCHAR(255)
);