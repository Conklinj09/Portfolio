function Footer() {
    const data = [
        {
            name: 'Jeanette',
            link: "https://github.com/Conklinj09"
        },
        
    ];

    return data
    .filter(person => person.name[0] === 'D')
    .map(person => {
        return (
            <div>
                <p>
                    Username: {person.name}
                </p>
            </div>
        );
    });
}
    
export default Footer;