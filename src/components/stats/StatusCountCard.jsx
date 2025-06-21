import '../../global.css';
import { useState } from 'react';
import StatusCountCardItems from './StatusCountCardItems';
import { statusMap } from '../../utils/constants';
import { Modal } from '../RootContainer';

const StatsCard = ({ linesData = [] }) => {
  const [modalStatus, setModalStatus] = useState(null);

  // severity code mappings for each status category
  const severityCodes = {
    goodService: 10,
    minorDelays: 9,
    severeDelays: 6,
    partClosure: 5,
    planned: 4,
    suspended: 2,
  };

  // count status disruptions by severity code
  const statusCounts = {
    goodService: 0,
    minorDelays: 0,
    severeDelays: 0,
    partClosure: 0,
    planned: 0,
    suspended: 0,
  };

  linesData.forEach((line) => {
    const severityCode = line.severity;
    if (severityCode === 10) statusCounts.goodService++;
    else if (severityCode === 9) statusCounts.minorDelays++;
    else if (severityCode === 6) statusCounts.severeDelays++;
    else if (severityCode === 5 || severityCode === 11)
      statusCounts.partClosure++;
    else if (severityCode === 4) statusCounts.planned++;
    else if (severityCode === 2) statusCounts.suspended++;
  });

  // get lines for a severity code
  const getLinesForSeverity = (severityCode) =>
    linesData.filter((line) => line.severity === severityCode);

  // modal content
  const renderModal = () => {
    if (!modalStatus) return null;
    const statusInfo = statusMap[modalStatus] || {
      name: 'unknown',
      bgColor: 'bg-gray-200',
      icon: null,
      iconColor: 'text-gray-600',
    };
    const lines = getLinesForSeverity(modalStatus);
    return (
      <Modal showModal={!!modalStatus} title={null}>
        <div
          className={`flex flex-col items-center gap-4 p-4 rounded-xl ${statusInfo.bgColor} bg-opacity-80`}
        >
          <div className="flex flex-col items-center gap-2">
            {statusInfo.icon && (
              <statusInfo.icon
                size={32}
                className={statusInfo.iconColor + ' mb-1'}
              />
            )}
            <div className="text-xl font-bold text-gray-800">
              {statusInfo.name}
            </div>
            <div className="text-sm text-gray-700">
              {lines.length} line(s) affected
            </div>
          </div>
          <div className="w-full border-t border-gray-300 my-2"></div>
          <div className="flex flex-col gap-2 w-full">
            {lines.length === 0 ? (
              <div className="text-gray-600 text-center">
                no lines in this status.
              </div>
            ) : (
              lines.map((line) => (
                <div
                  key={line.id}
                  className="flex flex-col items-start bg-white/80 rounded-lg p-2 mb-1 w-full"
                >
                  <div className="font-semibold text-gray-800">{line.name}</div>
                  <div className="text-xs text-gray-600">
                    {line.severityDescription}
                  </div>
                  {line.reason && (
                    <div className="text-xs text-gray-500 mt-1">
                      {line.reason}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          <button
            onClick={() => setModalStatus(null)}
            className="text-gray-600 text-small shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff] transition-all duration-500 backdrop-blur-sm rounded-lg px-2 py-0.5 ml-2 mr-2 bg-neutral-200 text-sm font-medium cursor-pointer mt-2"
          >
            close
          </button>
        </div>
      </Modal>
    );
  };

  // get status info using severity codes
  const goodServiceInfo = statusMap[severityCodes.goodService];
  const minorDelaysInfo = statusMap[severityCodes.minorDelays];
  const severeDelaysInfo = statusMap[severityCodes.severeDelays];
  const partClosureInfo = statusMap[severityCodes.partClosure];
  const plannedInfo = statusMap[severityCodes.planned];
  const suspendedInfo = statusMap[severityCodes.suspended];

  return (
    <div className="flex flex-col h-full w-full items-center justify-center px-4 py-4 cursor-default">
      <div className="flex items-center justify-center mt-[-8px]">
        <span className="text-2xl md:text-3xl not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033] mb-6">
          overview
        </span>
      </div>
      <div className="w-full max-w-md flex flex-col items-center">
        <StatusCountCardItems
          icon={
            goodServiceInfo.icon ? (
              <goodServiceInfo.icon
                size={16}
                className={goodServiceInfo.iconColor}
              />
            ) : null
          }
          statusType={goodServiceInfo.name}
          statusCount={statusCounts.goodService}
          bgColor={goodServiceInfo.bgColor}
          onClick={() => setModalStatus(severityCodes.goodService)}
        />
        <StatusCountCardItems
          icon={
            minorDelaysInfo.icon ? (
              <minorDelaysInfo.icon
                size={16}
                className={minorDelaysInfo.iconColor}
              />
            ) : null
          }
          statusType={minorDelaysInfo.name}
          statusCount={statusCounts.minorDelays}
          bgColor={minorDelaysInfo.bgColor}
          onClick={() => setModalStatus(severityCodes.minorDelays)}
        />
        <StatusCountCardItems
          icon={
            severeDelaysInfo.icon ? (
              <severeDelaysInfo.icon
                size={16}
                className={severeDelaysInfo.iconColor}
              />
            ) : null
          }
          statusType={severeDelaysInfo.name}
          statusCount={statusCounts.severeDelays}
          bgColor={severeDelaysInfo.bgColor}
          onClick={() => setModalStatus(severityCodes.severeDelays)}
        />
        <StatusCountCardItems
          icon={
            partClosureInfo.icon ? (
              <partClosureInfo.icon
                size={16}
                className={partClosureInfo.iconColor}
              />
            ) : null
          }
          statusType={partClosureInfo.name}
          statusCount={statusCounts.partClosure}
          bgColor={partClosureInfo.bgColor}
          onClick={() => setModalStatus(severityCodes.partClosure)}
        />
        <StatusCountCardItems
          icon={
            plannedInfo.icon ? (
              <plannedInfo.icon size={16} className={plannedInfo.iconColor} />
            ) : null
          }
          statusType={plannedInfo.name}
          statusCount={statusCounts.planned}
          bgColor={plannedInfo.bgColor}
          onClick={() => setModalStatus(severityCodes.planned)}
        />
        <StatusCountCardItems
          icon={
            suspendedInfo.icon ? (
              <suspendedInfo.icon
                size={16}
                className={suspendedInfo.iconColor}
              />
            ) : null
          }
          statusType={suspendedInfo.name}
          statusCount={statusCounts.suspended}
          bgColor={suspendedInfo.bgColor}
          onClick={() => setModalStatus(severityCodes.suspended)}
        />
      </div>
      {renderModal()}
    </div>
  );
};

export default StatsCard;
