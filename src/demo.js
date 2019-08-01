import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RightArrowIcon from "@material-ui/icons/ArrowRightAlt";
import CheckIcon from "@material-ui/icons/CheckCircle";
import SwapIcon from "@material-ui/icons/SwapHoriz";
import TimeIcon from "@material-ui/icons/WatchLater";
import ErrorIcon from "@material-ui/icons/Error";
import TerminateIcon from "@material-ui/icons/NotInterested";

import { green, blue, yellow, red, grey } from "@material-ui/core/colors";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#eee",
    color: theme.palette.common.black
  }
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650,
    "& td, & th": {
      /* */
    }
  },
  button: {
    textTransform: "none"
  },
  sourceIcon: {
    fontSize: 16
  },
  statusIconDoneSmall: {
    fontSize: 16,
    color: green[400]
  },
  statusIconScheduledSmall: {
    fontSize: 16,
    color: blue[400]
  },
  finishedChip: {
    color: "#fff",
    backgroundColor: green[400]
  },
  scheduledChip: {
    color: "#fff",
    backgroundColor: blue[400]
  },
  errorChip: {
    color: "#fff",
    backgroundColor: red[400]
  },
  terminatedChip: {
    color: "#fff",
    backgroundColor: grey[600]
  },
  progressSmall: {
    color: "#fff",
    borderRadius: "50%",
    padding: "0.3rem",
    backgroundColor: yellow[800]
  },
  ongoing64: {
    "& div": {
      backgroundColor: yellow[800]
    }
  },
  ongoingText: {
    fontSize: "0.9rem"
  },
  customOngoing: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    color: theme.palette.getContrastText(theme.palette.grey[700]),
    backgroundColor: theme.palette.grey[600],
    borderRadius: 24 / 2,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    // label will inherit this from root, then `clickable` class overrides this for both
    cursor: "default",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: "none",
    textDecoration: "none",
    border: "none", // Remove `button` border
    padding: 0, // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box"
  },
  labelSmall: {
    paddingLeft: 8,
    paddingRight: 8
  }
}));

export default function SimpleTable() {
  const classes = useStyles();

  const [dense, setDense] = React.useState(false);

  function handleChangeDense(event) {
    setDense(event.target.checked);
  }

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <Paper className={classes.root}>
        <Table className={classes.table} size={dense ? "small" : "medium"}>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Source</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Duration</StyledTableCell>
              <StyledTableCell>Downloads</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="1356">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1356</a>
              </TableCell>
              <TableCell>
                <RightArrowIcon className={classes.sourceIcon} /> Bulk
              </TableCell>
              <TableCell>
                <CheckIcon className={classes.statusIconDoneSmall} />
              </TableCell>
              <TableCell>00:00:56</TableCell>
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="1355">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1355</a>
              </TableCell>
              <TableCell>
                <RightArrowIcon className={classes.sourceIcon} /> Bulk
              </TableCell>
              <TableCell>
                <Chip
                  size="small"
                  label="Finished"
                  className={classes.finishedChip}
                />
              </TableCell>
              <TableCell>00:00:47</TableCell>
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="1354">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1354</a>
              </TableCell>
              <TableCell>
                <SwapIcon className={classes.sourceIcon} /> PerSecurity
              </TableCell>
              <TableCell>
                <Chip
                  icon={<CheckIcon />}
                  size="small"
                  color="primary"
                  label="Finished"
                  className={classes.finishedChip}
                />
              </TableCell>
              <TableCell>00:01:04</TableCell>
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="1353">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1353</a>
              </TableCell>
              <TableCell>
                <RightArrowIcon className={classes.sourceIcon} /> Bulk
              </TableCell>
              <TableCell>
                <TimeIcon className={classes.statusIconScheduledSmall} />
              </TableCell>
              <TableCell />
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="1352">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1352</a>
              </TableCell>
              <TableCell>
                <SwapIcon className={classes.sourceIcon} /> PerSecurity
              </TableCell>
              <TableCell>
                <Chip
                  size="small"
                  label="Scheduled"
                  className={classes.scheduledChip}
                />
              </TableCell>
              <TableCell />
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="1351">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1351</a>
              </TableCell>
              <TableCell>
                <SwapIcon className={classes.sourceIcon} /> PerSecurity
              </TableCell>
              <TableCell>
                <Chip
                  icon={<TimeIcon />}
                  size="small"
                  color="primary"
                  label="Scheduled"
                  className={classes.scheduledChip}
                />
              </TableCell>
              <TableCell />
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="1350">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1350</a>
              </TableCell>
              <TableCell>
                <SwapIcon className={classes.sourceIcon} /> PerSecurity
              </TableCell>
              <TableCell>
                <CircularProgress
                  className={classes.progressSmall}
                  size="0.8rem"
                />
              </TableCell>
              <TableCell />
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="1349">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1349</a>
              </TableCell>
              <TableCell>
                <RightArrowIcon className={classes.sourceIcon} /> Bulk
              </TableCell>
              <TableCell>
                <Typography className={classes.ongoingText}>
                  Ongoing: 169/241
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value="64"
                  className={classes.ongoing64}
                />
              </TableCell>
              <TableCell />
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="1348">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1348</a>
              </TableCell>
              <TableCell>
                <SwapIcon className={classes.sourceIcon} /> PerSecurity
              </TableCell>
              <TableCell>
                <Chip
                  icon={<ErrorIcon />}
                  size="small"
                  color="primary"
                  label="Error"
                  className={classes.errorChip}
                />
              </TableCell>
              <TableCell>00:43:52</TableCell>
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="1347">
              <TableCell component="th" scope="row" align="right">
                <a href="#">1347</a>
              </TableCell>
              <TableCell>
                <SwapIcon className={classes.sourceIcon} /> PerSecurity
              </TableCell>
              <TableCell>
                <Chip
                  icon={<TerminateIcon />}
                  size="small"
                  color="primary"
                  label="Terminated"
                  className={classes.terminatedChip}
                />
              </TableCell>
              <TableCell>01:15:33</TableCell>
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>

            <TableRow key="666">
              <TableCell component="th" scope="row" align="right">
                <a href="#">666</a>
              </TableCell>
              <TableCell>
                <SwapIcon className={classes.sourceIcon} /> PerSecurity
              </TableCell>
              <TableCell>
                <section className={classes.customOngoing}>
                  <span className={classes.labelSmall}>Ongoing: 169/241</span>
                  <LinearProgress
                    variant="determinate"
                    value="64"
                    className={classes.ongoing64}
                  />
                </section>
              </TableCell>
              <TableCell>01:15:33</TableCell>
              <TableCell>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="small"
                  aria-label="Split button"
                >
                  <Button className={classes.button}>Filename.type</Button>
                  <Button color="primary" variant="outlined" size="small">
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
