function constructionCrew(obj) {
    
    if (obj.dizziness === true) {
        obj.levelOfHydrated = (obj.weight * 0.1) * obj.experience;
        obj.dizziness = false;
        return obj;
    }else {
        return obj;
    }
 
}

constructionCrew({ weight: 80,

    experience: 1,
    
    levelOfHydrated: 0,
    
    dizziness: true });