
### Start ur Cassandra:
```
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.cassandra.plist
```

### Connecting to Cassandra:
```
Cassandra 127.0.0.1
```

Connected to Test Cluster at 127.0.0.1:9042.
[cqlsh 5.0.1 | Cassandra 3.11.0 | CQL spec 3.4.4 | Native protocol v4]
Use HELP for help.


### Creating a keyspace:
```
cqlsh> create keyspace doordash
   ... with replication = {'class':'SimpleStrategy','replication_factor':1};
```

### Connect to database
```
cqlsh> use doordash;
```
### Create table 
```
cqlsh:doordash> create table order_doordash (order_id int primary key, order_item varchar, order_quantity int, order_price int);
```
### Insert into table
```
cqlsh:doordash> insert into order_doordash (order_id, order_item, order_quantity, order_price) values (111,'Pizza',1,10);
```

### Select from table without using WHERE clause
```
cqlsh:doordash> select *from order_doordash;

 order_id | order_item | order_price | order_quantity
----------+------------+-------------+----------------
      111 |      Pizza |          10 |              1

(1 rows)
```

### Create Column Index
```
cqlsh:doordash> create index idx_item on order_doordash(order_item);
```

### Select from table using WHERE clause on indexed column
```
cqlsh:doordash> select *from order_doordash where order_item = 'Pizza';

 order_id | order_item | order_price | order_quantity
----------+------------+-------------+----------------
      111 |      Pizza |          10 |              1

(1 rows)
```

### Update table
```
cqlsh:doordash> update order_doordash set order_quantity = 2 where order_id = 111;
cqlsh:doordash> select *from order_doordash where order_item = 'Pizza';

 order_id | order_item | order_price | order_quantity
----------+------------+-------------+----------------
      111 |      Pizza |          10 |              2

(1 rows)
```

### Delete from table
```
cqlsh:doordash> delete from order_doordash where order_id = 111;
cqlsh:doordash> select *from order_doordash;

 order_id | order_item | order_price | order_quantity
----------+------------+-------------+----------------
      112 |     Burger |          15 |              1

(1 rows)
```
