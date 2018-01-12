import React from 'react';

const PollAddView = () => (
    <div className = "poll-add-view">
    <div className = "flex-item flex-item-header"><p>New Poll</p></div>
    <div className = "flex-item flex-item-name-field"><input className = "name-field" placeholder = "Enter poll name"></input></div>
    <div className = "flex-item flex-item-options-field"><textarea className = "options-field" placeholder = {'Enter Options\nSeparated\nBy\nNew Lines'}></textarea></div>
    <div className = "flex-item flex-item-btn-create"><button className = "btn-create">Create a Poll</button></div>
    </div>
)

export default PollAddView;
