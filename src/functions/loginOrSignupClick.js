export default function(changeModalTo, changeModal)  {
    changeModal(state => {
        return Object.assign({}, state, {modal: changeModalTo})
    });

}
