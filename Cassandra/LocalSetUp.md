# Install cql
To use cqlsh, the Cassandra query language shell, you need to install cql:
```
pip install cql
```

# Install Cassandra
This installs Apache Cassandra:
```
brew install cassandra
```
## Starting/Stopping Cassandra
Use this command to start Cassandra:
```
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.cassandra.plist
```

Use this command to stop Cassandra:
```
launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.cassandra.plist
```

On Mavericks, Homebrew failed to move the plist file into LaunchAgents, which gives this error message:

launchctl: Couldn't stat("/Users/<user>/Library/LaunchAgents/homebrew.mxcl.cassandra.plist"): No such file or directory

To fix this just issue the following command. Then, try using the launchctl load command again:
```
cp /usr/local/Cellar/cassandra/<version number>/homebrew.mxcl.cassandra.plist ~/Library/LaunchAgents/
```

Cassandra file locations

Properties: /usr/local/etc/cassandra
Logs: /usr/local/var/log/cassandra
Data: /usr/local/var/lib/cassandra/data


### Reference : https://gist.github.com/hkhamm/a9a2b45dd749e5d3b3ae
