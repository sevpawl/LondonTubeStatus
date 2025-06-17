import '../../global.css';
import { useState } from 'react';
import StatusCountCardItems from './StatusCountCardItems';
import { statusMap } from '../../utils/Colors';
import { Modal } from '../RootContainer';

const StatsCard = ({ linesData = [] }) => {
  const [modalStatus, setModalStatus] = useState(null);

  // count status disruptions
  const statusCounts = {
    goodService: 0,
    minorDelays: 0,
    severeDelays: 0,
    partClosure: 0,
    planned: 0,
    suspended: 0,
  };

  linesData.forEach((line) => {
    const status =
      line.lineStatuses?.[0]?.statusSeverityDescription?.toLowerCase() ||
      'unknown';
    if (status.includes('good service')) statusCounts.goodService++;
    else if (status.includes('minor delays')) statusCounts.minorDelays++;
    else if (status.includes('severe delays')) statusCounts.severeDelays++;
    else if (status.includes('part closure')) statusCounts.partClosure++;
    else if (status.includes('planned')) statusCounts.planned++;
    else if (status.includes('suspended')) statusCounts.suspended++;
  });

  // get lines for a status
  const getLinesForStatus = (statusKey) =>
    linesData.filter(
      (line) =>
        line.lineStatuses &&
        line.lineStatuses[0] &&
        line.lineStatuses[0].statusSeverityDescription
          ?.toLowerCase()
          .includes(statusKey),
    );

  // modal content
  const renderModal = () => {
    if (!modalStatus) return null;
    const statusInfo = statusMap[modalStatus] || {
      bgColor: 'bg-gray-200',
      icon: null,
      iconColor: 'text-gray-600',
    };
    const lines = getLinesForStatus(modalStatus);
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
            <div className="text-xl font-bold capitalize text-gray-800">
              {modalStatus.replace(/([a-z])([A-Z])/g, '$1 $2')}
            </div>
            <div className="text-sm text-gray-700">
              {lines.length} line(s) affected
            </div>
          </div>
          <div className="w-full border-t border-gray-300 my-2"></div>
          <div className="flex flex-col gap-2 w-full">
            {lines.length === 0 ? (
              <div className="text-gray-600 text-center">
                No lines in this status.
              </div>
            ) : (
              lines.map((line) => (
                <div
                  key={line.id}
                  className="flex flex-col items-start bg-white/80 rounded-lg p-2 mb-1 w-full"
                >
                  <div className="font-semibold text-gray-800">{line.name}</div>
                  <div className="text-xs text-gray-600">
                    {line.lineStatuses[0].statusSeverityDescription}
                  </div>
                  {line.lineStatuses[0].reason && (
                    <div className="text-xs text-gray-500 mt-1">
                      {line.lineStatuses[0].reason}
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

  // icons
  const GoodServiceIcon = statusMap['good service'].icon;
  const MinorDelaysIcon = statusMap['minor delays'].icon;
  const SevereDelaysIcon = statusMap['severe delays'].icon;
  const PartClosureIcon = statusMap['part closure'].icon;
  const PlannedIcon = statusMap['planned'].icon;
  const SuspendedIcon = statusMap['suspended'].icon;

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
            GoodServiceIcon ? (
              <GoodServiceIcon
                size={16}
                className={statusMap['good service'].iconColor}
              />
            ) : null
          }
          statusType="good service"
          statusCount={statusCounts.goodService}
          bgColor={statusMap['good service'].bgColor}
          onClick={() => setModalStatus('good service')}
        />
        <StatusCountCardItems
          icon={
            MinorDelaysIcon ? (
              <MinorDelaysIcon
                size={16}
                className={statusMap['minor delays'].iconColor}
              />
            ) : null
          }
          statusType="minor delays"
          statusCount={statusCounts.minorDelays}
          bgColor={statusMap['minor delays'].bgColor}
          onClick={() => setModalStatus('minor delays')}
        />
        <StatusCountCardItems
          icon={
            SevereDelaysIcon ? (
              <SevereDelaysIcon
                size={16}
                className={statusMap['severe delays'].iconColor}
              />
            ) : null
          }
          statusType="severe delays"
          statusCount={statusCounts.severeDelays}
          bgColor={statusMap['severe delays'].bgColor}
          onClick={() => setModalStatus('severe delays')}
        />
        <StatusCountCardItems
          icon={
            PartClosureIcon ? (
              <PartClosureIcon
                size={16}
                className={statusMap['part closure'].iconColor}
              />
            ) : null
          }
          statusType="part closure"
          statusCount={statusCounts.partClosure}
          bgColor={statusMap['part closure'].bgColor}
          onClick={() => setModalStatus('part closure')}
        />
        <StatusCountCardItems
          icon={
            PlannedIcon ? (
              <PlannedIcon
                size={16}
                className={statusMap['planned'].iconColor}
              />
            ) : null
          }
          statusType="planned"
          statusCount={statusCounts.planned}
          bgColor={statusMap['planned'].bgColor}
          onClick={() => setModalStatus('planned')}
        />
        <StatusCountCardItems
          icon={
            SuspendedIcon ? (
              <SuspendedIcon
                size={16}
                className={statusMap['suspended'].iconColor}
              />
            ) : null
          }
          statusType="suspended"
          statusCount={statusCounts.suspended}
          bgColor={statusMap['suspended'].bgColor}
          onClick={() => setModalStatus('suspended')}
        />
      </div>
      {renderModal()}
    </div>
  );
};

export default StatsCard;
