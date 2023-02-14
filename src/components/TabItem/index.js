import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const buttonStyle = isActive ? 'active-tab-btn' : ''
  const onclickTabId = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${buttonStyle}`}
        onClick={onclickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
