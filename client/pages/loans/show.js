import React, {Component} from 'react';
import {Table, Card, Grid, CardContent} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import RePaymentRow from '../../components/RepaymentsRow';
import Loan from '../../utils/loan';
import {Router} from '../../routes';

export default class Show extends Component {
    state = {
        rePayments: [],
        loanTitle: '',
        lenderAddress: '',
        borrowerAddress: '',
        loanContractAddress: '',
        loading: false
    };
    static async getInitialProps(props) {
        const loanContractAddress = props.query.address;
        const loan = await Loan(loanContractAddress);
        const rePaymentsCount = await loan.methods.getRepaymentsCount().call();
        const loanTitle = await loan.methods.loanTitle().call();
        let lenderAddress = await loan.methods.lender().call();
        let borrowerAddress = await loan.methods.borrower().call();
        const rePayments = await Promise.all(
            Array(parseInt(rePaymentsCount))
                .fill()
                .map((element, index) => {
                    return loan.methods.rePayments(index).call();
                })
        );

        return {rePayments, loanTitle, lenderAddress, borrowerAddress, loanContractAddress};
    }

    componentDidMount = async () => {
        await this.setState({
            rePayments: this.props.rePayments,
            loanTitle: this.props.loanTitle,
            lenderAddress: this.props.lenderAddress,
            borrowerAddress: this.props.borrowerAddress,
            loanContractAddress: this.props.loanContractAddress
        });
    };

    renderRows = () => {
        return this.state.rePayments.map((rePayment, index) => {
            return (
                <RePaymentRow
                    key={index}
                    month={index}
                    loanContractAddress={this.state.loanContractAddress}
                    loading={this.state.loading}
                    handleLoadingChange={this.handleLoadingChange}
                    handleMonthToIsPaidChange={this.handleMonthToIsPaidChange}
                    {...rePayment}
                />
            );
        });
    };

    handleLoadingChange = val => {
        this.setState({
            loading: val
        });
    };

    handleMonthToIsPaidChange = async () => {
        console.log(this.props.rePayments);
        debugger;
        await Router.pushRoute(`/loans/${this.state.loanContractAddress}`);
        console.log(this.props.rePayments);
        await this.setState({
            rePayments: this.props.rePayments
        });
    };

    render() {
        const {Header, Row, HeaderCell, Body} = Table;
        return (
            <Layout>
                <Card fluid>
                    <Card.Content textAlign='center'>
                        <Card.Header>{this.state.loanTitle}</Card.Header>
                        <Card.Meta>{this.state.loanContractAddress}</Card.Meta>
                        <Card.Description>Lender: {this.state.lenderAddress}</Card.Description>
                        <Card.Description>Borrower: {this.state.borrowerAddress}</Card.Description>
                    </Card.Content>
                </Card>
                <Table celled>
                    <Header>
                        <Row>
                            <HeaderCell>Month</HeaderCell>
                            <HeaderCell>Date</HeaderCell>
                            <HeaderCell>Balance</HeaderCell>
                            <HeaderCell>Payment</HeaderCell>
                            <HeaderCell>Interest</HeaderCell>
                            <HeaderCell>Principal</HeaderCell>
                            <HeaderCell>Status</HeaderCell>
                            <HeaderCell />
                        </Row>
                    </Header>
                    <Body>{this.renderRows()}</Body>
                </Table>
            </Layout>
        );
    }
}
