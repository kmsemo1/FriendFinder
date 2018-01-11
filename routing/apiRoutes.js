// post new friend to array
app.post("/api/friend", function(req, res) {

    var newFriend = req.body;
  
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    reservations.push(newFriend);
  
    res.json(newFriend);
  });