/**
 * 1. e.target.[name of the input field].value
 * 2. use form action & formData in the action handler. formData.get('name of the input field');
 * 3. controlled component.( one per each filed ) useState on change the field. usefull to dynamically handle error
 * 
 * 3.1. handle all controlled field in one state object 
 *  const [formData, setFormData] = useState({
 *      name: '',
 *      email: '',
 *      password: ''
     * })
    
  * 4. uncontrolled using useRef
 */