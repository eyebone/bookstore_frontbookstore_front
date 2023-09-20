import {Space, Table, Tag, Image, message, Button} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown} from 'antd';
import "../css/bookDetail.css"
import {Form, Input, Modal, Select } from 'antd';
import { useState } from 'react';
import CButton from "./cButton";
import React from "react";
import ManagerAddBook from './ManagerAddBook';




class ManagerBook extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books:[],searchbooks:[]}
    }

    componentDidMount() {

        fetch("http://localhost:8080/getbooks")
            .then(response => response.json())
            .then(data => {
                this.setState({books:data});
                this.setState({searchbooks:data})
            }).catch(function (ex) {
            console.log('parsing failed', ex)
        })

    }


    render() {
        const columns = [
            {
                title: 'ISBN',
                dataIndex: 'isbn',
                width: 80,
            },
            {
                title: 'cover',
                dataIndex: 'image',
                width: 150,
                render: (record) => <img src={record} alt="" width="80px" />
            },
            {
                title: 'name',
                dataIndex: 'name',
                width: 250,
            },
            {
                title: 'author',
                dataIndex: 'author',
                width: 150,
            },
            {
                title: 'inventory',
                dataIndex: 'inventory',
                width: 80,
            },
            {
                title: 'deleteBook',
                dataIndex: 'caozuo',
                render: (_,record) => <Button danger type="primary" onClick={()=>{

                    fetch("http://localhost:8080/deletebook",{
                        method:'POST',
                        headers:{'Content-Type':'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(record),
                    })
                        .then(response => response.json())
                        .then(data => {
                            message.success("删除成功")
                            setTimeout(function(){
                                window.location.reload()
                            },200)
                        }).catch(function (ex) {
                        console.log('parsing failed', ex)
                    })
                }
                }>delete</Button>,
            },
            {
                title: 'modifyInfo',
                dataIndex: 'xiugai',
                render: (_,record) =><CButton info={record}/>,
            },
        ];


        const { Search } = Input;
        const onSearch = (value) => {

            const filteredBooks = this.state.books.filter(
                book => book.name.toLowerCase().includes(value.toLowerCase())
            )
            this.setState({searchbooks:filteredBooks});

        }

        return (
          <div className="Books">
            <h1 className={"title"}>管理书籍信息：</h1>

            <div>
              <ManagerAddBook />
            </div>
            <div className="searchbar">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
            </div>
            <Table
              className={"booktable"}
              columns={columns}
              dataSource={this.state.searchbooks}
            />
          </div>
        );
    }
}

export default ManagerBook;