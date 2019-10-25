function collide (mr,fr){
    if(mr.x-fr.x<mr.width/2+fr.width/2
      && fr.x-mr.x<mr.width/2+fr.width/2
      && mr.y-fr.y<mr.height/2+fr.height/2
      && fr.y-mr.y<mr.height/2+fr.height/2
     ){
     
     return true;
    }
    else{
      return false;
    }
    }
    