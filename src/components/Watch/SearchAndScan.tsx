import { timeState } from '@atoms/timeState'
import ColorButton from '@components/ControlVisualisers/ColorButton'
import ControlArrows from '@components/ControlVisualisers/ControlArrows'
import Colors from '@data/Colors'
import type { Channel } from '@data/epg/AllChannels'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useRecoilValue } from 'recoil'

interface Props {
  channel: Channel
}

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    zIndex: 100,
    width: '80%',
    bottom: 48,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff',
  },
  header: {
    color: Colors.main,
    fontFamily: 'Zurich',
    fontSize: 22,
    padding: '0 4px',
    paddingLeft: 6,
    display: 'flex',
    borderBottom: `4px solid ${Colors.mainFadedText}`,
    height: 32,
  },
  headerTime: {
    marginLeft: 'auto',
    color: Colors.mainFadedText,
  },
  main: {
    padding: '4px 0',
    paddingLeft: 24,
    background: Colors.mainFaded,
    fontSize: 22,
    height: '2.75em',
    display: 'grid',
    gridTemplateColumns: '20fr 80fr',
    gridTemplateRows: '1fr 1fr',
    fontFamily: 'ZurichBT',
    gap: 6,
    lineHeight: 1,
  },
  footer: {
    color: Colors.main,
    fontFamily: 'Zurich',
    fontSize: 22,
    borderTop: `4px solid ${Colors.mainFadedText}`,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    height: 32,
    paddingLeft: 6,
    alignItems: 'end',
  },
  controlArrow: {
    fontSize: 22,
    position: 'absolute',
    transform: 'translateY(0.5px)',

    '& + span': {
      marginLeft: '1.7em',
    },
  },
  footerSection: {
    position: 'relative',
    maxHeight: '100%',

    '& > $footerLabel': {
      display: 'inline-block',
      transform: 'translateY(-2px)',
    },
  },
  footerLabel: {},
  now: {
    color: '#fff',
  },
  later: {
    color: Colors.mainFadedText
  }
})

export default function SearchAndScan({ channel }: Props) {
  const classes = useStyles()
  const { time } = useRecoilValue(timeState)

  return (
    <aside className={classes.root}>
      <div className={classes.header}>
        <span style={{ width: `${channel.channelNumber.length + 0.5}ch` }}>{channel.channelNumber}</span>
        <span>{channel.name}</span>
        <span className={classes.headerTime}>{time.format('H.mma ddd D MMM')}</span>
      </div>
      <div className={classes.main}>
        <span className={classes.now}>NOW</span>
        <span className={classes.now}>This is mega poggers</span>
        <span className={classes.later}>69.69am</span>
        <span className={classes.later}>Cock time!</span>
      </div>
      <div className={classes.footer}>
        <div className={classes.footerSection}>
          <ControlArrows className={classes.controlArrow} variant="horizontal" />
          <span className={classes.footerLabel}>Time</span>
        </div>
        <div className={classes.footerSection}>
          <ControlArrows className={classes.controlArrow} variant="vertical" />
          <span className={classes.footerLabel}>Channel</span>
        </div>
        <div className={classes.footerSection}>
          <ColorButton buttonColor="yellow" />
          <span className={classes.footerLabel}>Messages</span>
        </div>
        <div className={classes.footerSection}>
          <ColorButton buttonColor="blue" />
          <span className={classes.footerLabel}>Favourite</span>
        </div>
      </div>
    </aside>
  )
}
