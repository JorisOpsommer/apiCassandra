CREATE KEYSPACE yourdb 
  WITH REPLICATION = { 
   'class' : 'NetworkTopologyStrategy', 
   'datacenter1' : 1 
  } ;
  
 CREATE TABLE yourdb.competences ( 
   id UUID PRIMARY KEY, 
   name text, 
   description text );

INSERT INTO yourdb.competences (
  id,name, description) values(6ab09bec-e68e-48d9-a5f8-97e6fb4c9b47,'Test1', 'yourDescription') using ttl 86400;