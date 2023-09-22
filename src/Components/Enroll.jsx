import React,{useEffect,useState} from 'react'

export default function Enroll(props) {
  const [result,setResult]=useState();
  const [relationdrop,setrelationdrop]=useState();
    const url = window.location.href
  var regex = /[?&]([^=#]+)=([^&#]*)/g,
    params = {},
    match;
  while (match = regex.exec(url)) {
    params[match[1]] = match[2];
  }
  // if (params.EMPID) {
  //   localStorage.setItem('employeeno', params.EMPID);
  //   localStorage.setItem('corpcode', params.COMPID);
  //   localStorage.setItem('policyno', params.POLICYNO);
  //   // console.log(localStorage.getItem('policyno'));
  //   // Variables.set_slug(params.key1)
  // }
  // else{
  //   localStorage.setItem('employeeno', '');
  //   localStorage.setItem('corpcode', '');
  //   localStorage.setItem('policyno', '');
  // }
  const getCorporate = async (a) => {
    // setLoading(true)
    try {
      let response = await fetch(`https://www.vipulmedcorp.com/API/Vipul/Portals/GetEmpDetails `, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
       
        }, body: JSON.stringify({
          "employeeno":params.EMPID,
          "corpcode": params.COMPID
        })
      });

      let json = await response.json();
      console.log(json);
      console.log(json.CorpName);
      setResult(json)
      getRelation();
        
      
         }
catch (error) {
      console.log(error);//
     
    }
  }

  const getRelation = async (a) => {
    // setLoading(true)
    try {
      let response = await fetch(`https://www.vipulmedcorp.com/API/Vipul/Portals/GetRelation`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      
        }, body: JSON.stringify({
          "corpcode": params.COMPID
        })
      });

      let json = await response.json();
      if (json.length > 0) {
         setrelationdrop(json);
console.log(json);
      }
      else {
         setrelationdrop(['No data found'])
      }
      // console.log(topupsuminsured)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {

   
    getCorporate();
 
   window.scrollTo(0, 0)
 }, []);
  return (
    <div>Enroll
{result?`hello${result.CorpName}`:'nodata'}

    </div>
  )
}
