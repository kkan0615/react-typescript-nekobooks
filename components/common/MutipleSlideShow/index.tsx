import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme } from '@material-ui/core'
import { Book } from '../../../src/interfaces/book/book'

export interface MultipleSliderShowProps {
  books: Array<Book>
  number: number
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    height: 200,
    width: 140,
  },
  image: {
    height: 170,
    width: 140,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const MultipleSliderShow: React.FC<MultipleSliderShowProps> = props => {
  const classes = useStyles()
  const { books, number } = props
  const [index, setIndex] = useState(0)

  const handlePrevButton = () => {
    setIndex(index - number < 0 ? books.length - (number * 2) : index - number)
  }

  const handleNextButton = () => {
    setIndex(index + number >= books.length - number ? 0 : index + number)
  }

  return (
    <Grid container className={classes.root} sm={12} md={12} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid>
            <IconButton onClick={handlePrevButton}>
              <Icon>keyboard_arrow_left</Icon>
            </IconButton>
          </Grid>
          {books.slice(index + number, index + (number * 2)).map(book => (
            <Grid key={book._id} item>
              <Paper className={classes.paper}>
                <img className={classes.image} alt={book.title} src={book.image} />
                <Typography variant="h6" noWrap>
                  {book.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
          <Grid>
            <IconButton onClick={handleNextButton}>
              <Icon>keyboard_arrow_right</Icon>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MultipleSliderShow
