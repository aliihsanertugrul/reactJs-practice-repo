import React from 'react'
import  ulkeler from "../../assets/data/countries.json"

const Ulkeler = () => {
const style={
    textAlign:"center",
    backgroundColor:"cyan"
}
  //! verilen datadan ulkelri secip selcte yerlestir
  //! a harfi ile baslayan ulkeleri sirala

  return (
    <div>
        <select defaultValue="ulke">
            <option disabled value="ulke">Bir ulke seciniz</option>
            {
                ulkeler.map((ulke)=>(<option key={ulke.code} value={ulke.code}  >{ulke.name}</option>))
            }
        </select>

        <table>
            <thead>
                <tr>
                    <th>Sira No</th>
                    <th>Ulke Adi</th>
                    <th>Ulke Kodu</th>
                </tr>
            </thead>
            <tbody>
                {
                     ulkeler.filter((ulke,index)=>ulke.name.startsWith("T"))
                     .map((item,index)=>(<tr key={index} style={{style}} >
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.code}</td>
                     </tr>))
                }


            </tbody>
        </table>


        

    </div>
  )
}

export default Ulkeler