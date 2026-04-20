const hobbies = ["Comer", "Dormir", "Estudar", "Jogar", "Ler"];


export const Hobbies = () => {
    const [hobbyPreferido, ...outrosHobbies] = hobbies;

    return (
        <>
            <p>Estes são os meus hobbies:</p>
            <ul className="list-disc pl-10">
                <li className="font-bold">{hobbyPreferido}</li>
                {outrosHobbies.map((outroHobby, i) => {
                    return <li key={`hobby-${i}`}>{outroHobby}</li>
                })}
            </ul>
        </>
    );
};