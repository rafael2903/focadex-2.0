import {PagesContainer, Page} from './styles';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function analiser(prev_page,current_page,setCurrentPage,next_page){

    if(!prev_page){
        return(
            <>
            <IoIosArrowBack size={22} style={{opacity: 0}} />

            <Page className="current">{current_page}</Page>
            <Page onClick={ () => changePage('next',1,setCurrentPage) } >{next_page}</Page>  
            <Page onClick={ () => changePage('next',2,setCurrentPage) } >{next_page+1}</Page>  

            <IoIosArrowForward size={22} color="#BEBEBE" style={{cursor: 'pointer'}} onClick={ () => changePage('next',1,setCurrentPage) }/>
            </>
        )
    }else if (!next_page) {
        return(
            <>
            <IoIosArrowBack size={22} color="#BEBEBE" style={{cursor: 'pointer'}} onClick={ () => changePage('prev',1,setCurrentPage) }/>

            <Page onClick={ () => changePage('prev',2,setCurrentPage) } >{prev_page-1}</Page>  
            <Page onClick={ () => changePage('prev',1,setCurrentPage) } >{prev_page}</Page>  
            <Page className="current">{current_page}</Page>

            <IoIosArrowForward size={22} style={{opacity: 0}} />
            </>
        )
    }else {
        return(
            <>
            <IoIosArrowBack size={22} color="#BEBEBE" style={{cursor: 'pointer'}} onClick={ () => changePage('prev',1,setCurrentPage) }/>
    
            <Page onClick={ () => changePage('prev',1,setCurrentPage) } >{prev_page}</Page>  
            <Page className="current">{current_page}</Page>
            <Page onClick={ () => changePage('next',1,setCurrentPage) } > {next_page}</Page>
              
            <IoIosArrowForward size={22} color="#BEBEBE" style={{cursor: 'pointer'}} onClick={ () => changePage('next',1,setCurrentPage) }/>

            </>
        )
    }
}

function changePage(action,value,setCurrentPage) {

    window.scrollTo(0, 0);
    setCurrentPage(prev => action == 'next' ? prev+value : prev-value);

}


function Pagination( {prev_page, current_page, setCurrentPage, next_page} ) {



    return(
        <>
        <PagesContainer>
            {analiser(prev_page,current_page,setCurrentPage,next_page)}
        </PagesContainer>
        </>
    );
}

export default Pagination;