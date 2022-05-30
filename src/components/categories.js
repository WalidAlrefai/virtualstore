import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import { selectCategory } from '../store/categories.js';
import { useState, useEffect } from 'react';

const Categories = (props) => {
    const [activeCategory, setActiveCategory] = useState(props.categories[0].id);
    const { selectCategory } = props;
    function handleClick(category) {
        setActiveCategory(category);
        props.selectCategory(category);
        console.log(props.categories);
    }
    useEffect(() => {
        selectCategory(activeCategory);

    }, [activeCategory, selectCategory]);
    return (
        <div>
            <div>

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
                <h2>
                    Browse our Categories
                </h2>
                <h1>{props.activeCategory?.description}</h1>
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
    selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);