var global = this;
command( 'blackhat97_teleport', function ( parameters, player ) {
  var bkLocation = org.bukkit.Location;
  var x = parameters[0];
  var y = parameters[1];
  var z = parameters[2];
  if(isNaN(Number(x)) || isNaN(Number(y)) || isNaN(Number(z))){
    player.sendMessage('please input number.');
  } else {
    player.teleport(new bkLocation(player.world, x, y, z));
  }
});

command( 'blackhat97_teleport', function ( parameters, player ) {
  var bkLocation = org.bukkit.Location;
  var x = parameters[0];
  var y = parameters[1];
  var z = parameters[2];
  if(isNaN(Number(x)) || isNaN(Number(y)) || isNaN(Number(z))){
    player.sendMessage('please input number.');
  } else {
    player.teleport(new bkLocation(player.world, x, y, z));
  }
});

0 == 0;

0 % 2 == 0;
