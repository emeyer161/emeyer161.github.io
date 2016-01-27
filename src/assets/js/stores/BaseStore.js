import dispatcher from '../dispatcher';
import Events from 'events';
import { CHANGE } from '../constants';

class BaseStore extends Events.EventEmitter {
    
    constructor() {
        super();
        dispatcher.register(this.reduce.bind(this));
    }
    
    /**
     * This function must be defined in each child
     */
    reduce(action){}
    
    addListenerNow(cb){
        this.on(CHANGE, cb);
    }
    
    removeListenerNow(cb){
        this.removeListener(CHANGE, cb);
    }
    
    emitChange(){
        this.emit(CHANGE);
    }
    
}

export default BaseStore;