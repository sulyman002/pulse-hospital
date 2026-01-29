 {Object.entries(workingSchedule).map(([day, schedule]) => (
                <div key={day} className="grid grid-cols-4 gap-2 items-center bg-gray-50 p-2 rounded-lg">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={schedule.enabled}
                      onChange={(e) => setWorkingSchedule({
                        ...workingSchedule,
                        [day]: { ...schedule, enabled: e.target.checked }
                      })}
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                    <span className="text-sm">{day}</span>
                  </label>
                  <input
                    type="time"
                    value={schedule.from}
                    onChange={(e) => setWorkingSchedule({
                      ...workingSchedule,
                      [day]: { ...schedule, from: e.target.value }
                    })}
                    disabled={!schedule.enabled}
                    className="px-2 py-1 border border-gray-300 rounded text-sm disabled:bg-gray-100"
                  />
                  <input
                    type="time"
                    value={schedule.to}
                    onChange={(e) => setWorkingSchedule({
                      ...workingSchedule,
                      [day]: { ...schedule, to: e.target.value }
                    })}
                    disabled={!schedule.enabled}
                    className="px-2 py-1 border border-gray-300 rounded text-sm disabled:bg-gray-100"
                  />
                </div>
              ))}