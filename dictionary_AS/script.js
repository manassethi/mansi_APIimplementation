const options={

    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2eaa1db02amsh51ef0162b7626b6p16bdddjsnbba2bf35baac',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

const getDefinition=(word)=>{
wordd.innerHTML=word
url=`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`
fetch(url,options)
.then(response=>response.json())
.then(response=>{


    console.log(response)
    
    def1.innerHTML=response.definitions[0]['definition']
    def2.innerHTML=response.definitions[1]['definition']
   
    })
.catch(err=> console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getDefinition(word)
})
getDefinition("miracle")