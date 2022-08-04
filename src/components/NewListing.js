import React, {useEffect, useState} from 'react'

function NewListing() {

    const [listings, setListings] = useState([])
    const [picture_url, setPicture_Url] = useState("")
    const [price, setPrice] = useState("")
    const [built, setBuilt] = useState("")
    const [sqrft, setSqrft] = useState("")
    const [bath, setBath] = useState("")
    const [bed, setBed] = useState("")
    const [laundry, setLaundry] = useState("")
    const [superintendent, setSuperIntendent] = useState("")
    const [to_buy, setTo_Buy] = useState("")
    const [to_rent, setTo_Rent] = useState("")
    const [addy, setAddy] = useState("")
    const [zipcode, setZipcode] = useState("")

    useEffect(() => {
        fetch ('http://localhost:9292/listing/newlisting')
        .then(res => res.json())
        .then(data => setListings(data))
    },[])

    const formSubmit = (e) => {
        e.preventDefault();

        const listing = {
            picture_url: picture_url,
            price: price,
            built: built,
            sqrft: sqrft,
            bath: bath,
            bed: bed,
            laundry: laundry,
            superintendent: superintendent,
            to_buy: to_buy,
            to_rent: to_rent,
            addy: addy,
            zipcode: zipcode,
        }
        addNewListing(listing)
    }

    const addNewListing = newListing => {
        fetch('http://localhost:9292/listing/newlisting', {
            method: 'POST',
            headers: {'Content-Type' : "application/json"},
            body: JSON.stringify(newListing)
        })
        .then (res => res.json())
        .then (newData => setListings([...listings, newData.data]))
    }
    



    return(
        <div>
        <h1 className="team_title_header">Let's create a new Listing!</h1>
            <h3 className="subtext">You can create your own listing by providing a picture, a price, a building year, dimensions and more. Click the submit button to show your listing! </h3>
            <form onSubmit={formSubmit}>
                <input className="team_input_name" placeholder='Your Listing Picture' value={picture_url} onChange={(e) => setPicture_Url(e.target.value)}/>
                <input className="team_input_location" placeholder='Your Listing Price' onChange={(e) => setPrice(e.target.value)}/>
                <input className="team_input_logo"placeholder='Year Built' onChange={(e) => setBuilt(e.target.value)}/>
                <input className="team_input_logo"placeholder='Square Feet' onChange={(e) => setSqrft(e.target.value)}/>
                <input className="team_input_logo"placeholder='Number of Bathrooms' onChange={(e) => setBath(e.target.value)}/>
                <input className="team_input_logo"placeholder='Number of Bedrooms' onChange={(e) => setBed(e.target.value)}/>
                <input className="team_input_logo"placeholder='Laundry Present: True or False' onChange={(e) => setLaundry(e.target.value)}/>
                <input className="team_input_logo"placeholder='Super Present: True or False' onChange={(e) => setSuperIntendent(e.target.value)}/>
                <input className="team_input_logo"placeholder='For Sale: True or False' onChange={(e) => setTo_Buy(e.target.value)}/>
                <input className="team_input_logo"placeholder='For Rent: True or False' onChange={(e) => setTo_Rent(e.target.value)}/>
                <input className="team_input_logo"placeholder='Address' onChange={(e) => setAddy(e.target.value)}/>
                <input className="team_input_logo"placeholder='Zip Code' onChange={(e) => setZipcode(e.target.value)}/>
                <button className="submit_button" type="submit">Submit Listing</button>
            </form>
            {listings.map((listing) => {
                return ( 
                    
                    <div className="team_card" key={listing.id}>
                        <img className="team_image" src ={listing.picture_url} alt={listing.addy}/>
                        <div className="team_details">
                            <h1>{listing.picture_url}</h1>
                            <h2>{listing.price}</h2>
                            <h2>{listing.built}</h2>
                            <h2>{listing.sqrft}</h2>
                            <h2>{listing.bath}</h2>
                            <h2>{listing.bed}</h2>
                            <h2>{listing.laundry}</h2>
                            <h2>{listing.superintendent}</h2>
                            <h2>{listing.to_buy}</h2>
                            <h2>{listing.to_rent}</h2>
                            <h2>{listing.addy}</h2>
                            <h2>{listing.zipcode}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
    }

export default NewListing