import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import { selectCategory,getCatagories } from '../store-toolkit/category';
import { useState, useEffect } from 'react';
// import {getCatagories} from '../store-toolkit/category';
const Categories = (props) => {
    const [activeCategory, setActiveCategory] = useState(props.categories[0]?.id);
    const { selectCategory,getCatagories } = props;
    function handleClick(category) {
        setActiveCategory(category);
        props.selectCategory(category);
        // console.log(props.categories);
    }
    useEffect(() => {
        getCatagories(1);
    },[getCatagories])
    useEffect(() => {
        selectCategory(activeCategory);
    }, [activeCategory, props, selectCategory]);
    return (
        <div>
            <div>
                <h2>
                    Browse our Categories
                </h2>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="text" aria-label="text button group">
                        {props.categories.map((category, i) => {
                            return (
                                <Button key={i} onClick={() => handleClick(category.id)}>
                                    {category.name}
                                </Button>
                            )
                        })}
                    </ButtonGroup>

                </Box>

                <div style={{ textAlign: "center" }}>
                    <h1>{props.activeCategory?.name}</h1>
                    <h2>{props.activeCategory?.description}</h2>
                </div>

            </div>
        </div>

    );
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        activeCategory: state.categories.activeCategory,
        // categoryDescription: state.categories.categoryDescription,
    }
}

const mapDispatchToProps = {
    selectCategory,
    getCatagories
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);