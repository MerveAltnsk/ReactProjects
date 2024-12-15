function User({name,surname,isLoggedIn,number,friends}) {
    return(
        <>

        <h1> 
            {name} {surname}

            <br />
            <br />
            {/* isLoggedIn varsa ve yoksabunları yapar */}
            {
            isLoggedIn ? `${name} ${surname} (${number})` : 'Giriş yapmadınız'
            }
        </h1>

        {friends.map((f, index) => (       //Her döngü listesinde array listesinde en dıştaki elemana key={index} veya key={f.id} gibi vs veririz
            <div key={index}>
                {index} - {f}
            </div>
        ))}

         
        </>

    )
}


export default User;