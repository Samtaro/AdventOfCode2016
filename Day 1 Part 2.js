var instructions = `R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1`
var intoArray = instructions.split(", ")
var location = {
  coordinates: [0,0],
  direction: "N"
}
var pastCoords = [[0,0]];
intoArray.forEach(function(move, idx){
  var turn = move.substring(0,1);
  var steps = move.substring(1);
  if(turn === "R"){
    switch(location.direction){
      case "N":
        location.direction = "E"
        location.coordinates = [location.coordinates[0]+ parseInt(steps), location.coordinates[1]]
        break;
      case "S":
        location.direction = "W"
        location.coordinates = [location.coordinates[0]- parseInt(steps), location.coordinates[1]]
        break;
      case "E":
        location.direction = "S"
        location.coordinates = [location.coordinates[0],location.coordinates[1]-parseInt(steps)]
        break;
      case "W":
        location.direction = "N"
        location.coordinates = [location.coordinates[0],location.coordinates[1]+parseInt(steps)]
        break;
      default:
        return null;
    }
  }
  else{
    switch(location.direction){
      case "N":
        location.direction = "W"
        location.coordinates = [location.coordinates[0]-parseInt(steps), location.coordinates[1]]
        break;
      case "S":
        location.direction = "E"
        location.coordinates = [location.coordinates[0]+parseInt(steps), location.coordinates[1]]
        break;
      case "E":
        location.direction = "N"
        location.coordinates = [location.coordinates[0],location.coordinates[1]+parseInt(steps)]
        break;
      case "W":
        location.direction = "S"
        location.coordinates = [location.coordinates[0],location.coordinates[1]-parseInt(steps)]
        break;
      default:
        return null;
    }
  }
  for(var i =1; i< pastCoords.length; i++){
    var x1 = pastCoords[i-1][0]; var y1 = pastCoords[i-1][1];
    var x2 = pastCoords[i][0]; var y2 = pastCoords[i][1];
    var x3 = pastCoords[pastCoords.length-1][0]; var y3 = pastCoords[pastCoords.length-1][1];
    var x4 = location.coordinates[0]; var y4 = location.coordinates[1];
    if(x1<x3 && x3<x2 && y3<y2 && y2<y4){
      console.log(idx, x3, y1)
    }
    else if(x1<x3 && x3<x2 && y3>y2 && y2>y4){
      console.log(idx, x3, y1)
    }
    else if(x1>x3 && x3>x2 && y3>y2 && y2>y4){
      console.log(idx, x3, y1)
    }
    else if(x1>x3 && x3>x2 && y3<y2 && y2<y4){
      console.log(idx, x3, y1)
    }
    else if(y1<y3 && y3<y2 && x3<x2 && x2<x4){
      console.log(idx, y3, x1)
    }
    else if(y1<y3 && y3<y2 && x3>x2 && x2>x4){
      console.log(idx, y3, x1)
    }
    else if(y1>y3 && y3>y2 && x3<x2 && x2<x4){
      console.log(idx, y3, x1)
    }
    else if(y1>y3 && y3>y2 && x3>x2 && x2>x4){
      console.log(idx, y3, x1)
    }
  }
pastCoords.push(location.coordinates)
})
