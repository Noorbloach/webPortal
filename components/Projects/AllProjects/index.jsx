import React from 'react';
import { Box, Card, Table, TableBody, TableCell, TableContainer, TableRow, Typography, LinearProgress } from '@mui/material';
import styles from '@/components/Projects/AllProjects/AllProjects.module.css'; // Adjust the import based on your project structure

const AllProjects = () => {
  return (
    <>
      <Card>
        <TableContainer>
          <Table>
            <TableBody>
              {/* TableRow 7 */}
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/project-logo7.png" alt="Image" width="25px" />
                    <Typography component="h5" fontWeight="500" fontSize="13px" className={styles.ml1}>
                      Construction Project X
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img src="/images/user1.png" alt="Image" width="28px" height="28px" />
                    <img src="/images/user2.png" alt="Image" width="28px" height="28px" />
                  </div>
                </TableCell>

                <TableCell align="center" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  $5,000
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: 500, borderBottom: "1px solid #F7FAFF", fontSize: "12px" }}>
                  <span className={styles.successBadge}>Complete</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">100%</Typography>
                    <LinearProgress variant="determinate" value={100} />
                  </Box>
                </TableCell>

                <TableCell align="right" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  1 Jan 2021
                </TableCell>
              </TableRow>

              {/* TableRow 8 */}
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/project-logo8.png" alt="Image" width="25px" />
                    <Typography component="h5" fontWeight="500" fontSize="13px" className={styles.ml1}>
                      New Office Building
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img src="/images/user3.png" alt="Image" width="28px" height="28px" />
                    <img src="/images/user4.png" alt="Image" width="28px" height="28px" />
                  </div>
                </TableCell>

                <TableCell align="center" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  $2,000
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: 500, borderBottom: "1px solid #F7FAFF", fontSize: "12px" }}>
                  <span className={styles.dangerBadge}>Pending</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">10%</Typography>
                    <LinearProgress variant="determinate" value={10} />
                  </Box>
                </TableCell>

                <TableCell align="right" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  1 Feb 2021
                </TableCell>
              </TableRow>

              {/* TableRow 9 */}
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/project-logo9.png" alt="Image" width="25px" />
                    <Typography component="h5" fontWeight="500" fontSize="13px" className={styles.ml1}>
                      Public Beta Release
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img src="/images/user5.png" alt="Image" width="28px" height="28px" />
                    <img src="/images/user6.png" alt="Image" width="28px" height="28px" />
                  </div>
                </TableCell>

                <TableCell align="center" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  $7,000
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: 500, borderBottom: "1px solid #F7FAFF", fontSize: "12px" }}>
                  <span className={styles.successBadge}>Complete</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">100%</Typography>
                    <LinearProgress variant="determinate" value={100} />
                  </Box>
                </TableCell>

                <TableCell align="right" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  1 Mar 2021
                </TableCell>
              </TableRow>

              {/* TableRow 10 */}
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/project-logo10.png" alt="Image" width="25px" />
                    <Typography component="h5" fontWeight="500" fontSize="13px" className={styles.ml1}>
                      Market and SEO
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img src="/images/user7.png" alt="Image" width="28px" height="28px" />
                    <img src="/images/user8.png" alt="Image" width="28px" height="28px" />
                  </div>
                </TableCell>

                <TableCell align="center" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  $1,000
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: 500, borderBottom: "1px solid #F7FAFF", fontSize: "12px" }}>
                  <span className={styles.successBadge}>Complete</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">100%</Typography>
                    <LinearProgress variant="determinate" value={100} />
                  </Box>
                </TableCell>

                <TableCell align="right" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  1 Apr 2021
                </TableCell>
              </TableRow>

              {/* TableRow 11 */}
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/project-logo11.png" alt="Image" width="25px" />
                    <Typography component="h5" fontWeight="500" fontSize="13px" className={styles.ml1}>
                      New Office Building
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    <img src="/images/user9.png" alt="Image" width="28px" height="28px" />
                    <img src="/images/user10.png" alt="Image" width="28px" height="28px" />
                  </div>
                </TableCell>

                <TableCell align="center" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  $2,000
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: 500, borderBottom: "1px solid #F7FAFF", fontSize: "12px" }}>
                  <span className={styles.dangerBadge}>Pending</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">10%</Typography>
                    <LinearProgress variant="determinate" value={10} />
                  </Box>
                </TableCell>

                <TableCell align="right" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  1 Feb 2021
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default AllProjects;
