
*** Start ur Cassandra:
```
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.cassandra.plist
```

*** Connecting to Cassandra:
```
Cassandra 127.0.0.1
```

*** Creating a keyspace:
```
cqlsh> create keyspace doordash
   ... with replication = {'class':'SimpleStrategy','replication_factor':1};
```


