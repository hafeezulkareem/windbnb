import stays from '../../data/stays.json'
import WindbnbStore from '../../Windbnb/stores/WindbnbStore/WindbnbStore'

const windbnbStore = new WindbnbStore(stays)

export default { windbnbStore }
