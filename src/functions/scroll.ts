function scroll(value: string | undefined){
    if(value === '')return
    const section = document.querySelector( `#${value}` );
    if(section !== null){
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
}

export default scroll;