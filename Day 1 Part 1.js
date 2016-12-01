var instructions = `R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1`
var intoArray = instructions.split(", ")
var location = {
  coordinates: [0,0],
  direction: "N"
}
intoArray.forEach(function(move){
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
})
console.log(parseInt(location.coordinates[0]) + parseInt(location.coordinates[1]))
