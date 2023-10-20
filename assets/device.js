function getDeviceType() {
    /** true = 移动端 false = pc端  */
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
}
