я не хочу использовать библиотеки 
вот что я передаю в компонент 

    <DocsContentSnippetSource :source="'JS'">
      {{ textFieldProps }}</DocsContentSnippetSource
    >


  const textFieldProps = ` 
     defineProps({ 

      type: { 
        type: String,
        required: false,
        default: 'text',
      },

      placeholder: {         
        type: String, 
        required: false, 
      }, 

      required: {
        type: Boolean, 
        required: false, 
        default: false, 
      }, 
        
      minLength: { 
        type:Number,
         required: false,
       },
       
      maxLength: { 
        type: Number,
        required: false, 
      },

      disabled: {
         type: Boolean,
         required: false, 
        }, 
        
      readonly: { 
        type: Boolean,
        required: false,
      }, 
      
      label: {
         type: String,
         required: false,
         default: '',
      },
      
      icon: {
        type: String,
        required: false,
        default: '', 
      },
        
      errorText: { 
        type: String,
        required: false,
        default: '', 
      }, 
      
      hintText: { 
        type: String,
        required: false,
        default: '',
      },
           
      })`

я хочу выделить название пропсов type ,placeholder , required,minLength и тд
эти слова я хочу выделить оранжевым цветом
