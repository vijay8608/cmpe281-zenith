Setup Cassandra cluster on AWS

Prerequisites
Steps
1)Deleting default data
```
sudo service cassandra stop
```
then delete default dataset
```
sudo rm -rf /var/lib/cassandra/data/system/*
```
2)Configuring the cluster
```
sudo nano /etc/cassandra/cassandra.yaml
```

3)Configuring the Firewall
```
sudo nano /etc/iptables/rules.v4
```
4)Check the cluster status
```
sudo nodetool status
```
