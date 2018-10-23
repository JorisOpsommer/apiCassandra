CREATE KEYSPACE ideaalduaalDb 
  WITH REPLICATION = { 
   'class' : 'NetworkTopologyStrategy', 
   'datacenter1' : 1 
  } ;
  
 CREATE TABLE ideaalduaaldb.competenties ( 
   id UUID PRIMARY KEY, 
   naam text, 
   beschrijving text );
