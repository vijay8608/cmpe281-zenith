rs.set({
  app: rsapp,
  token: "r30kKwv3sA6ExrJ9OmLSm4Wo3nt9MQA1yG94wn6ByFbNrVWhcwAyOM7Zhfxqh8fe",
  d: {
    "unread_msgs": 12,
    "last_action": "/read/news",
    "birthday": "2013-08-13"
  }},
  function(err, resp) {
    /*
    resp contains the session with the new values:

    {  
      "id":"user1001",
      "r": 1,
      "w": 2,
      "idle": 1,
      "ttl": 7200, 
      "d":
        {
          "foo": "bar",
          "unread_msgs": 12,
          "last_action": "/read/news",
          "birthday": "2013-08-13"
        }
    }
    */  
  });
