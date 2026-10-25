// Q5. Boolean Logic Access System

function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Door "closed" is interpreted as locked (isDoorLocked)
  const secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  const status = secure ? "Secure" : "Unsafe";

  console.log(
    `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
    `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside} -> ${status}`
  );

  // Show which condition failed using ! (NOT) and || (OR)
  if (!secure) {
    if (!isAlarmOn) console.log("   Reason: alarm is off");
    if (!isDoorLocked || !isWindowClosed) console.log("   Reason: door or window not secured");
    if (!isOwnerInside) console.log("   Reason: owner is not inside");
  }
}

// Test multiple scenarios
checkAccess(true, true, true, true);    // Secure
checkAccess(false, true, true, true);   // Unsafe
checkAccess(true, false, true, true);   // Unsafe
checkAccess(true, true, false, true);   // Unsafe
checkAccess(true, true, true, false);   // Unsafe
checkAccess(false, false, false, false);// Unsafe
