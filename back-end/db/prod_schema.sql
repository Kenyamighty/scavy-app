

CREATE TABLE scavy (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     category TEXT NOT NULL,
     description TEXT NOT NULL,
     condition TEXT NOT NULL,
     location TEXT NOT NULL,
     is_new BOOLEAN,
     image TEXT

);


