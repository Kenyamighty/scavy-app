DROP DATABASE IF EXISTS scavy_dev;
CREATE DATABASE scavy_dev;

\c scavy_dev;

CREATE TABLE scavy (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     category TEXT,
     description TEXT,
     condition TEXT
     location TEXT,
     is_new BOOLEAN

)


