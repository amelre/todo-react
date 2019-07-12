import React, {Component} from 'react';
import './TaskDetails.css';
import {FiClock,  FiPlus, FiMinus, FiFlag, FiSave, FiTrash2} from 'react-icons/fi';


class TaskDetails extends Component{

     constructor(props){
          super(props);
          this.state = {
            _id: props.task._id,
            description: props.task.description ||  '',
            pomodoros: props.task.pomodoros ||  1,
            type: props.task.type ||  'medium',
            notes: props.task.notes ||  ''
        }
     }

    saveChanges = () => {
        this.props.saveEvent(this.state)
    }

    delete = ()=> {
        this.props.deleteEvent(this.state._id)
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    pomodoroChange = number => {
        this.setState({pomodoros: this.state.pomodoros + number})
    }

    prorityChange = value => {
        this.setState({type: value})
    }

     render(){
        const { description,  pomodoros, type, notes} = this.state;
        console.log(type);
        return (
            <div className={"detail-card"}>
                <input name="description" className={"input"} value={description} onChange={this.handleChange}/>
                
                <div className={"form-group"}>
                    <label className="align-items-center"> <FiClock/> &nbsp;  Cantidad de pomodoros: </label>
                    <FiMinus className={"cursor-pointer"} onClick={()=> this.pomodoroChange(-1)} /> {pomodoros} 
                    <FiPlus className={"cursor-pointer"} onClick={()=> this.pomodoroChange(1)} />
                </div>

                <div className={"form-group"}>
                    <label className={"align-items-center"}> Priority</label>
                    <button onClick={()=> this.prorityChange('LOW')} className={"btn btn-low "+ (type === 'LOW' ? 'btn-low-selected': '') } > <FiFlag /> </button>
                    <button onClick={()=> this.prorityChange('MEDIUM')} className={"btn btn-medium "+ (type === 'MEDIUM' ? 'btn-medium-selected': '') } > <FiFlag/> </button>
                    <button onClick={()=> this.prorityChange('HIGH')} className={"btn btn-high  "+ (type === 'HIGH' ? 'btn-high-selected': '') } > <FiFlag/> </button>
                    <button onClick={()=> this.prorityChange('TOP')} className={"btn btn-top  "+ (type === 'TOP' ? 'btn-top-selected': '') }> <FiFlag/> </button>
                </div>

                <div className={"form-group"}>
                    <textarea className={"input"} name="notes" value={notes}  placeholder="Add a note ... " onChange={this.handleChange}/>
                </div>
               
                <div className={"form-group"}>
                    <button className={"btn-flat"} onClick={this.saveChanges} ><FiSave/> Save</button>
                    <button className={"btn-flat btn-danger"} onClick={this.delete}> <FiTrash2/> Delete</button>
                </div>
               
               
            </div>
        )
     }
}

export default TaskDetails;
